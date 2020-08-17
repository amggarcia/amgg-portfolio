---
title: "Dynamic configurable form collection platform"
shortDesc : "Development of a dynamic/configurable information collection and submission platform in the social sector."
date: "2017-08-10"
---
## Project Scope

This project was developed for a company in the public sector and the goal was to develop a web application that allowed users and companies to fill and submit forms online to replace the existing processes that used Adobe forms and/or paper submissions.

This web application was designed firstly as a POOC for one of the existing processes but was planed so that each of its form collections components could be used independently in order to make the introduction of new processes faster and easier.

Using these form collection components as building blocks (identification component, fiscal information, bank information etc..) you could define new processes that used these building blocks without the need to code a new "workflow" reducing the workload so that development time was only needed for the creation new collection components.

## Technology Stack

This project was developed using .Net Core for the back-end API, Angular 8 in the front-end and interacting with both a Microsoft SQLServer database (via Entity Framework) and a Oracle database (mostly via Stored Procedures).

## Roles

In this project i was part of a team of 3 developers and responsible for developing both the back-end and front-end, in adition to coordinate with an external team that was exposing new api's for our application to consume data from an already existing system.

## Challenges

During the project most of the hardships came from trying to find ways to mantain our system modular (avoid the creation of hard dependencies between diferent modular components) and meeting client demands for validation/cross data integrity.

These validations/cross data integrity requirements were not detailed at the project start wich forced us to find a way to meet the client requirements and keep the application modular and extensible as planned initialy, in order to do this an external "validation engine" was designed where you could define rules and validations without impacting the information collection components directly.
