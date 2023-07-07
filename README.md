# no.5_booking_website
## Purpose
A direct booking website for a short-term rental property.
## Design

### Key Users

This application will only be used by guests staying in my short-term rental property to book future stays or extend current stays. The users will need to be able to check availability and book dates they require easily. They will be able to see pictures of where they will be staying along with any extra information needed once they have booked the space, such as lockbox codes, parking information, electricity meter etc.

For inspiration for this project, I will be looking at sites such as Airbnb to see what they have done well for their users.

### Requirements

**User Experience:** Focus on creating a user-friendly interface that allows users to easily search, view, and book accommodations. Consider implementing filters, sorting options, and clear booking processes. Provide high-quality images, detailed descriptions, and accurate availability information to help users make informed decisions.

**Accommodation Listings:** Develop a robust system for managing and displaying accommodation listings. Consider the key attributes and information you want to include, such as property type, location, amenities, pricing, availability calendar, and reviews. Implement a secure and efficient way for hosts to create and manage their listings.

**Booking and Availability:** Implement a reliable booking system that allows users to check availability, select dates, and complete bookings seamlessly. Consider handling conflicts in real-time to prevent double bookings and ensure accurate availability information. Provide confirmation emails and booking details to both hosts and guests.

**Secure Payments:** Implement a secure payment gateway to handle transactions between guests and hosts. Ensure compliance with industry standards and protect sensitive payment information. Consider using established payment providers or integrating with trusted platforms to handle payments securely.

**Host Management:** Create a comprehensive host management system that allows hosts to update their listings, manage bookings, view guest information, and communicate with guests. Provide tools for hosts to track their earnings, manage calendar availability, and handle cancellations or modifications.

**Reviews and Ratings:** Implement a system for guests to leave reviews and ratings for accommodations they have booked. Display these reviews prominently to help future guests make informed decisions. Consider moderation mechanisms to handle inappropriate or fake reviews.

**Search and Filtering:** Develop a powerful search functionality that allows users to find accommodations based on their specific criteria, such as location, dates, price range, amenities, and property type. Implement filters and sorting options to refine search results and improve user experience.

**Mobile Responsiveness:** Ensure your web app is optimized for mobile devices since many users will access it through smartphones or tablets. Design a responsive layout that adapts to different screen sizes and provides a seamless experience across devices.

**Integration with External APIs:** Consider integrating with external APIs for services like mapping and geolocation (e.g., Google Maps API) or weather data to enhance the user experience and provide relevant information about the accommodations.

**Legal and Regulatory Compliance:** Research and understand the legal and regulatory requirements for short-term rentals in your target regions. Ensure that your web app complies with local laws, such as registration requirements, taxes, and safety regulations.

| Must Have             | Should Have           | Could Have    | 
| -------------         | -----------           | ----------    |
| Calendar              | Amenities             | Host Info     |
| Photos                | Rough Map Location    | Reviews       |
| Accept Bookings       | House Rules           |               |
| Messaging             | Property Description  |               |
| Connected Calendar    | Safety Info           |               |


### User Interface
The client UI will be done with ReactJS alongside Tailwindcss for styling. This will allow users to browse different properties listed on the site, and view availability and price for their desired dates. 

The flow of screens will look something like below.

[![](https://mermaid.ink/img/pako:eNpNkk2OgzAMha9iZV0uwGKkltJfRqqG2YVZRMTQqCVBSWiF2t59UjAqWeXzs2w_Jw9WGoksZrUV7Rl-14WGcJY8U84rXTvIz-YOiXD4N0ornpk6Upow4bmqddS1xGt-sqZS1yk95d_onKjRUeA4lSbe8JUxlw9v-Un0DWoPeWkRpz67KQ0SoytlG-GVmcSMZyhuCAJ-8KbwTuE9X0oJYZ4Wre8peOCpVB4-Q5BjiKIvWJHHAZK5QotJ5jAqKRmfw6gcyfEAG7I7wJa8DrAjhwM8l5VHC86L_gnZvNqeTA1wmDc9sAVrMKxEyfCSj7dUMH_GBgsWh6sU9lKwQr9CXtdK4fG9AmNZ7G2HCyY6b_JelxOPOWslwqdoWFyJq8PXP7b5oLA?type=png)](https://mermaid.live/edit#pako:eNpNkk2OgzAMha9iZV0uwGKkltJfRqqG2YVZRMTQqCVBSWiF2t59UjAqWeXzs2w_Jw9WGoksZrUV7Rl-14WGcJY8U84rXTvIz-YOiXD4N0ornpk6Upow4bmqddS1xGt-sqZS1yk95d_onKjRUeA4lSbe8JUxlw9v-Un0DWoPeWkRpz67KQ0SoytlG-GVmcSMZyhuCAJ-8KbwTuE9X0oJYZ4Wre8peOCpVB4-Q5BjiKIvWJHHAZK5QotJ5jAqKRmfw6gcyfEAG7I7wJa8DrAjhwM8l5VHC86L_gnZvNqeTA1wmDc9sAVrMKxEyfCSj7dUMH_GBgsWh6sU9lKwQr9CXtdK4fG9AmNZ7G2HCyY6b_JelxOPOWslwqdoWFyJq8PXP7b5oLA)

### Routing
Routing within the application for client-side will be handled by a navbar created with the NextUI library alongside NextJS' file-system-based Pages Router. API routes will also be dealt with by NextJS allowing me to fetch any data needed from the database such as booking or property information and communicate this to the client in a JSON response.

### Data Fetching
The data will live in a MySQL database due to it being a relational model, widely used and having excellent support alongside NextJS. Below is a basic example of how the DB schema will look.


| Properties          |                                                                                           |
|----------------|------------------------------------------------------------------------------------------------------|
| ID             | Unique identifier for each accommodation listing.                                                     |
| Title          | Title or name of the accommodation.                                                                  |
| Description    | Detailed description of the accommodation.                                                           |
| Location       | Address or geographical coordinates.                                                                 |
| Price          | Pricing details, such as base rate and additional charges.                                        |
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
| Check-in Date    | Date when the guest intends to check-in.                                                          |
| Check-out Date   | Date when the guest intends to check out.                                                         |
| Total Price      | Total price for the booking, including any additional charges or fees.                            |
| Status           | Current status of the booking (e.g., confirmed, cancelled, completed).                             |
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
They will be statically rendered for components such as the header, footer, logo and other parts that are common across all client sides. 

The pages and components that contain specific property information or reviews, will be dynamically rendered once they have been pulled from the DB.

### Integrations

### Infrastructure

### Performance 

### Scalability 

### Developer Experience 
