# LEMBANK Application

## **Overview**

LEMBANK is a responsive web application designed to align with a [Figma prototype](https://www.figma.com/file/hvvaDU16z02jomIzf0R5vL/Untitled?type=design&node-id=0-1&mode=design&t=UxyzNdQ86fWVY86X-0). Built with Angular, state management is handled by _NgRx_, and RxJS is used for reactive programming patterns.

## **Prerequisites**

- Docker Desktop is required for managing the application's containers.
- Node.js and npm must be installed for package management and script execution.

## **Installation**

1. The repository can be cloned to a local machine.
2. The local API is available for download at [Lembank-API](https://github.com/anadiradze/Lembank-API).
3. Docker Desktop should be installed and running.
4. A terminal can be used to navigate to the directory where the API has been cloned.
5. `docker-compose build` is to be executed.
6. After building, `docker-compose up` should be run to initiate the local API server.
7. Dependencies are installed by navigating to the project directory and running `npm install`.
8. The development server can be started with `ng serve`.

## **State Management**

State is managed using _NgRx_, which provides a robust framework for handling state transitions within the app.

## **Features**

- Functional **Login** and **Registration** components are present, with backend integration.
- Custom pipes are included for enhanced template data manipulation.
- A collection of reusable components can be found within the `shared` directory.

## **Validations**

During registration and login, the application enforces several checks to ensure data integrity and security:

- **Email**: Must be provided and follow a valid email format.This is a required field during registration.
- **Password**: A minimum of 8 characters is required for the password.This is a required field during registration.
- **Username**: This is a required field during registration.
- **Email or Password Error**: Users are alerted if either the email or password entered is incorrect during login.

## **Routing**

- The path `localhost:4200/login` opens the Login page, where users can sign in to their accounts.
- The path `localhost:4200/register` navigates to the Registration page for account creation.
- After authentication, the path `localhost:4200/home` leads to the main Dashboard, which displays user-specific information such as balance and transactions.

## **Project Structure**

- `src/app/auth`: Contains authentication-related components and services.
- `src/app/home`: Houses components like `balance`, `transactions`, which make up the dashboard.
- `src/app/shared`: Shared components, pipes, and services are located here.
- `*.routes.ts`: Routing configuration files for the app.

## **Backend**

A local API is provided.

## **Styling**

Responsive styling is consistent with the Figma design specifications provided.
