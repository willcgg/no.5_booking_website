# no.5_booking_website
## Purpose
A direct booking website for a short-term rental property.
## Design

### Key Users

This application will only be used by guests staying in my short-term rental property to book future stays or extend current stays. The users will need to be able to check availability and book dates they require easily. They will be able to see pictures of where they will be staying along with any extra information needed once they have booked the space, such as lockbox codes, parking information, electricity meter etc.

For inspiration for this project, I will be looking at sites such as Airbnb to see what they have done well for their users.

### User Stories

Users will need to be able to view the property and its amenities, features, location and availability.

Users will need to be able to easily extend their stay should availability allow for it.

Users will need to be able to easily view availability for future stays and book for their chosen dates.

The app should NEVER allow the property to be double booked e.g. booked on Airbnb & direct booking sites simultaneously.

Users should be able to leave a review for their past bookings for other users to read if they choose.

### Requirements

| Must Have             | Should Have           | Could Have    | 
| -------------         | -----------           | ----------    |
| Calendar              | Amenities             | Host Info     |
| Photos                | Rough Map Location    | Reviews       |
| Accept Bookings       | House Rules           |               |
| Messaging             | Property Description  |               |
| Connected Calendar    | Safety Info           |               |


### User Interface
The client UI will be done with NextUI, a react library which allows you to build aesthetically pleasing, modern, and fast front-ends with limited design experience. This will allow users to browse different properties listed on the site, and view availability and price for their desired dates. 

### Routing
Routing within the application for client-side will be handled by a navbar created with the NextUI library alongside NextJS' file-system-based Pages Router. API routes will also be handled by NextJS allowing me to fetch any data needed from the database such as booking or property information and communicate this to the client in a JSON response.

### Data Fetching
The data will live in a MySQL database due to it being a relational model, widely used and having excellent support alongside NextJS. Below is a basic example of how the DB schema will look.


| Properties          |                                                                                           |
|----------------|------------------------------------------------------------------------------------------------------|
| ID             | Unique identifier for each accommodation listing.                                                     |
| Title          | Title or name of the accommodation.                                                                  |
| Description    | Detailed description of the accommodation.                                                           |
| Location       | Address or geographical coordinates.                                                                 |
| Price          | Pricing details, such as base rate and any additional charges.                                        |
| Amenities      | List of amenities available in the accommodation (e.g., Wi-Fi, parking, swimming pool).              |
| Images         | URLs or references to images showcasing the accommodation.                                           |
| Availability   | Information about the availability of the accommodation, including date ranges, blocked dates, and reservations. |
| HostID         | Identifier of the host associated with the accommodation.                                            |
| Rating         | Average rating or reviews received by the accommodation.                                             |


| Bookings            |                                                                                       |
|------------------|--------------------------------------------------------------------------------------------------|
| ID               | Unique identifier for each booking.                                                               |
| AccommodationID  | Identifier of the booked accommodation.                                                          |
| GuestID          | Identifier of the guest making the booking.                                                       |
| Check-in Date    | Date when the guest intends to check in.                                                          |
| Check-out Date   | Date when the guest intends to check out.                                                         |
| Total Price      | Total price for the booking, including any additional charges or fees.                            |
| Status           | Current status of the booking (e.g., confirmed, canceled, completed).                             |
| Payment Details  | Information related to the payment transaction.                                                   |
| Special Requests | Any specific requests or notes provided by the guest.                                             |


| Users          |                                                                               |
|----------------|------------------------------------------------------------------------------------------|
| ID             | Unique identifier for each user.                                                          |
| Name           | Name of the user.                                                                        |
| Email          | Email address of the user (used for authentication and communication).                   |
| Password       | Securely hashed and salted password.                                                      |
| Profile Picture| URL or reference to the user's profile picture.                                           |
| Role           | Role or type of user (e.g., guest, host, administrator).                                   |

| Reviews          |                                                                                  |
|------------------|---------------------------------------------------------------------------------------------|
| ID               | Unique identifier for each review.                                                           |
| AccommodationID  | Identifier of the reviewed accommodation.                                                    |
| GuestID          | Identifier of the guest who left the review.                                                 |
| Rating           | Numeric rating is given by the guest (e.g., on a scale of 1 to 5).                              |
| Comment          | Textual feedback or comment provided by the guest.                                           |


| Hosts            |                                                                                   |
|------------------|----------------------------------------------------------------------------------------------|
| ID               | Unique identifier for each host.                                                              |
| Name             | Name of the host.                                                                            |
| Email            | Email address of the host (used for authentication and communication).                       |
| Accommodations   | A list of accommodations associated with the host.                                            |


### Rendering
For components such as the header, footer, logo and other parts that are common across all client sides they will be statically rendered. 

The pages and components that contain specific property information or reviews, will be dynamically rendered once they have been pulled from the DB.

### Integrations

### Infrastructure

### Performance 

### Scalability 

### Developer Experience 
