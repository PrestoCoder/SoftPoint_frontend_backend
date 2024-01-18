# Laravel Real Estate API

This project is a RESTful API built with Laravel for managing Real Estate properties. It includes features for listing, showing, adding, removing, and updating Real Estates.

## Table of Contents

- [Features](#features)
- [Test Requirements](#test-requirements)
- [Specifications](#specifications)
- [Usage](#usage)
- [Database Seeding](#database-seeding)
- [Installation](#installation)
- [Contributing](#contributing)
- [Feedback](#feedback)
- [Contact](#contact)

## Features

- RESTful API with endpoints for list, show, add, remove, and update Real Estates
- Feature tests for controller operations (index, create, show, update, destroy)
- Soft-delete functionality for removal
- Database seeding with at least 20 records
- JSON data format for both input and output

## Test Requirements

- One feature test for each controller operation
- Displayed specific attributes for list and show operations
- Displayed newly updated record for update operation
- Displayed recently removed record for destroy operation

## Specifications

- Database: MySQL

## Usage

1. Clone the repository: `git clone https://github.com/your-username/laravel-real-estate-api.git`
2. Install dependencies: `composer install`
3. Set up the database: `php artisan migrate --seed`
4. Run the server: `php artisan serve`

## Database Seeding
![Seeded values in red box](https://github.com/PrestoCoder/SoftPoint_frontend_backend/blob/main/softpoint-laravel/Seed_values_in_dBeaver.png
)


