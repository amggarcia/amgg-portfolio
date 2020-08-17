---
title: "Financial investment web application"
shortDesc : "Fullstack development of a financial investment advisory web platform for a bank, with the main goal of simplifying the process of creating and finalizing investment proposals for both the client and account manager."
date: "2017-08-10"
---
## Project Scope

This applications was developed for a bank and the goal was to create a modern web platform that would allow the account managers to create investment proposals for their clients in a simpler and faster way then what was available before.

In addition to create, detail, and send the investment proposals the platform would also allow the users to accept said proposals by generating all the necessary documentation and integrating with the banks existing website where the users could sign the documentation.

Once the process was reviewed by the client and manager, the application would then communicate with the banks systems and issue the buy/sell orders for the products that composed the proposal.

## Technology Stack

This web application was developed using C# and ASP.NET MVC5 using a IBM DB2 database as support.

## Roles

In this project i was part of a team of 5 developers and was involved in all the phases of the applications lifecycle from start to handover.

As a developer i worked on all the layers of the applications, front-end and back-end, implementing the business logic needed into our application as well as creating scheduled services to issue/cancel the investment orders when requirements were met.

## Challenges

During the project one of the challenges we faced was the fact that although there were already some API's available that would provide client, account and product information, they were handled by different teams and sectors of the bank, consuming this information would mean that we had to manage multiple calls with extremely different inputs in order to aggregate this information.

In order to mitigate the cost of getting this information that would be used multiple times during one investment process, we had to in some cases create and expose methods in our API that would collect and aggregate this information in the simplest and fastest way possible.
