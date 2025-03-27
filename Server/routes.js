import { createServer } from "http";
import { storage } from "./Storage.js";
import { insertInquirySchema } from "@shared/schema"; // Make sure this works in JS too
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";
import { sendAutoResponse } from "./utils/emailService.js";

export async function registerRoutes(app) {
  // Contact form submission route
  app.post("/api/inquiries", async (req, res) => {
    try {
      // Validate incoming data using Zod schema
      const validatedData = insertInquirySchema.parse(req.body);

      // Store the inquiry
      const inquiry = await storage.createInquiry(validatedData);

      // Send auto-response email (non-blocking)
      try {
        await sendAutoResponse(validatedData);
      } catch (emailError) {
        console.error('Failed to send auto-response email:', emailError);
        // Continue with success response even if email fails
      }

      // Respond with the saved inquiry
      res.status(201).json(inquiry);

    } catch (error) {
      if (error instanceof ZodError) {
        // If validation fails, send a 400 Bad Request
        res.status(400).json({ 
          message: fromZodError(error).message 
        });
      } else {
        // For any other errors, send a generic 500 response
        res.status(500).json({ 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}

