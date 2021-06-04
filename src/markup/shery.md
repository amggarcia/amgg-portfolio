---
title: 'Simple encrypted message sharing service'
shortDesc: 'Development of a simple web app that allows the sharing of messages between devices leveraging end to end encryption'
date: '2017-08-10'
image: '../assets/images/projectImages/shery.jpg'
---

## Project Scope

The web app was a side project that intends to provide a way of sharing simple and short private information such as passwords between devices while ensuring that the information is not saved in a clear text form

This came from a need of enabling a person to send a password (sourced from a password manager) from a mobile device to another device where one does not have said password manager installed (for instance a family computer device or any other device not owned by the person)

## Technology Stack

This web app was developed using Next.js, React, Firebase Authentication, and Firebase Firestore.

The choice of using Next.js and React came from me wanting to learn about Next.js and getting a refresher on React.

As per Firebase, the simplicity it allows in setting up an authentication system and real time updates from the database were good fits for the goals and intended use of the web app

## How it works

After logging in you can create a sharing session, by doing this you generate (client side) new asymmetric encryption keys on your browsers.

The public key of that asymmetric key pair is sent to the Firestore database where an entry is created to identify this sharing session.

The second device can then connect via the QR code (or clicking on it to copy a link) and submit text info, this information is encrypted on client side using the public key present in the firestore database and the encrypted text is saved on that same session entry.

This triggers a real time change on the first device allowing you to decrypt the information sent over with the private key present in memory for that sharing session.

Since these keys are saved in memory, if the receiver device (the one that created the sharing session) closes out of the tab that session is rendered unusable.

## Try it out

Shery is currently available at https://shery.vercel.app/

Since the goal was for personal use there currently is no account creating workflow available but you can use the account test@test.com with the password test123 to try it out.

The workflow is quite simple, after logging in on both devices (receiver and sender), you press the “Create new sherry” button on the receiver device.

This should take to a page where a QR can be read with the sender device (or clicked on to copy the link), and load the asymmetric encryption keys to be used.

After reading the QR code with the sender device you can fill in the information you wish to share and send it over to the receiver device.

Pressing the send button you should see a real time change on the receiver device notifying you that information was received and can be decrypted.

After pressing the decrypt button this information should be displayed in clear text.
