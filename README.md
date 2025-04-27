# Job Search App

## Overview
The Job Search App is a Node.js-based platform designed to streamline job searching, job posting, and application management. It provides features for users, HRs, and companies to interact seamlessly, offering functionalities like user authentication, job filtering, and application tracking.

## Features
- **User Management**: User registration, login, profile updates, and password recovery.
- **Job Management**: HRs can add, update, and delete job postings. Users can browse and apply for jobs.
- **Company Management**: Companies can manage their profiles and associated job postings.
- **Validation**: Input validation using Joi for secure and structured data handling.
- **Authentication**: Role-based access control for Users and HRs using JWT.
- **File Uploads**: Resume uploads using Multer and Cloudinary integration.
- **Database**: MongoDB with Mongoose for schema-based data modeling.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT
- **Validation**: Joi
- **File Uploads**: Multer, Cloudinary
- **Environment Variables**: dotenv

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
