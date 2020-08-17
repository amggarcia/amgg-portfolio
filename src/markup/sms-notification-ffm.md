---
title: "SMS notification service for Field Force Management platform"
shortDesc : "Development of a Windows Service based software to monitor real time changes in the workflows of a Field Force Management platform and notify the client through SMS of said changes."
date: "2017-08-10"
---
## Project Scope

The project was done for a telco company brazil and the goal was to develop an application that consumed information from a field force management platform and used that information to notify end clients and field technicians of changes to their tasks via SMS either in scheduled alerts or real-time notifications.

Replies sent to these messages were forwarded to the application and a shortcode maping system was used to allow the end client to request changes like rescheduling, canceling and other business specific actions.

## Technology Stack

This was a project that was almost 100% back-end and was done in C# with an Oracle database as a support.

The core of the application were Windows Services that routinely checked for new information in the main platform and decided whether the changes that ocurred to the work task should create new scheduled alerts or real-time notifications.

A REST API was also exposed so that the reply messages could be received and allow other external systems to use our application as a broker for the work assignment changes (rescheduling, cancelling etc...) 

A small web page was created to allow the parametrization of what changes would trigger SMS notifications and when to notify the clients (number of days before task execution) this web page was integrated in an already existing web portal and was developed using APS.NET MVC 5

## Roles

During this project i was part of a team composed of 2 developers wich allowed me to be involved in the complete lifecycle of the application, from change request analysis, development, deploy and maintenance.

## Challenges

One of the chalenges faced during the development of the application was the fact that after development was started the client asked that instead of using a push approach (main field force application would send web requests to our app with information changes) we used a pull approach instead, where we would routinely request for batches of information to update on our side.

With this change we also had to worry about problems that could arrise during periods of high usage, such as the batches used not being large enough/performant enough to handle all the in real time messages causing notifications to arrive after they were suposed to.

In order to combat this, parts of the system were scaled up, using paraleziation of some portions of the system in order to increase output (SMS trigger processing) while in other areas we increased the number of machines processing information (batch collection and processing from main application), both of this approaches forced us to now have to manage concurrency in our application, wich proved to be quite an interesting chalenge at the time.
