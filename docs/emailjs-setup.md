# EmailJS Setup Guide

This guide explains how to configure EmailJS for the contact form to send emails to `test@email.com`.

## Prerequisites

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Set up your preferred email service (Gmail, Outlook, etc.)

## Configuration Steps

### 1. Create EmailJS Account

- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Add Email Service

- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the authentication steps

### 3. Create Email Template

- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}} From: {{from_name}}
({{from_email}}) Company: {{company}} Phone: {{phone}} Message: {{message}} ---
This email was sent from the TaxDe contact form. Reply-To: {{reply_to}}
```

### 4. Configure Template Variables

Make sure your template includes these variables:

- `{{to_email}}` - Will be set to test@email.com
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone number
- `{{company}}` - Sender's company
- `{{message}}` - The message content
- `{{reply_to}}` - Reply-to email address

### 5. Get Your Credentials

After setting up service and template, collect:

- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section
- **Public Key**: Found in Account > API Keys

### 6. Environment Variables

Create a `.env` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 7. Test the Configuration

1. Start your development server: `pnpm dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check `test@email.com` for the received email

## Current Implementation

The contact form will send emails with these fields:

- **Name** - From form input
- **Email** - From form input
- **Phone** - From form input
- **Company** - From form input
- **Message** - From form textarea

All emails will be sent to: `test@email.com`

## Troubleshooting

- **Emails not sending**: Check browser console for errors
- **Invalid credentials**: Verify your EmailJS credentials in `.env`
- **Template errors**: Ensure all variables are properly mapped in your EmailJS template
- **Rate limiting**: EmailJS free tier has monthly limits

## Security Note

- Never commit `.env` files to version control
- EmailJS credentials should be kept private
- The public key is safe to expose in client-side code
