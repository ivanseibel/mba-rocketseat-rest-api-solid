# App

GymPass style app.

## RFs (Functional Requirements)

- [x] It should be possible to register;
- [x] It should be possible to authenticate;
- [x] It should be possible to get the profile of a logged-in user;
- [ ] It should be possible to get the number of check-ins made by the logged-in user;
- [ ] It should be possible for the user to get their check-in history;
- [ ] It should be possible for the user to search for nearby gyms;
- [ ] It should be possible for the user to search for gyms by name;
- [x] It should be possible for the user to check-in at a gym;
- [ ] It should be possible to validate a user's check-in;
- [ ] It should be possible to register a gym;

## RNs (Business Rules)

- [x] The user should not be able to register with a duplicate email;
- [x] The user cannot check-in twice on the same day;
- [ ] The user cannot check-in if they are not within 100m of the gym;
- [ ] The check-in can only be validated up to 20 minutes after it is created;
- [ ] The check-in can only be validated by administrators;
- [ ] The gym can only be registered by administrators;

## RNFs (Non-functional Requirements)

- [x] The user's password needs to be encrypted;
- [x] The application data needs to be persisted in a PostgreSQL database;
- [ ] All data lists need to be paginated with 20 items per page;
- [ ] The user must be identified by a JWT (JSON Web Token);