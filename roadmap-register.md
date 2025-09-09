Function: Register on Adopet website

Scenario: Successful user registration

Steps:
1. The user navigates to the registration page.
2. The user enters their name in the "Name" field.
3. The user enters a valid email address in the "E-mail" field.
4. The user enters a valid password in the "Password" field.
5. The user enters the same password in the "Password Confirmation" field.
6. The user submits the registration form.
7. The system confirms successful registration.

Expected Results:
[x] The system processes the entered information.

Business Rule:
[x] E-mail and password are required fields for registration.

***

Scenario: registration attempt failed

Steps:
1. The user navigates to the registration page.
2. The user don't fill mandatory fields. 
3. The user click on button "Register"

Expected Results:
[x] The system validates that there are blank fields
[x] The system show a error mensage, indicating that mandatory fields should be filled
