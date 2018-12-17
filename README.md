# Multnomah Legal Aid

## Overview

This case management application was initially designed for the local chapter of National Lawyers Guild, a non-profit that has provided pro-bono legal observing across the US since 1937.  The app will help the organization better import, organize, and manage data for the people they serve.

A primary benefit of this application is that it allows arrest records from the Multnomah County Sheriff's Office (MSCO) to be searched by time in addition to date.  This makes it easier for organizations to identify individuals who have been detained during large-scale arrests, such as during protests or demonstrations.

Although designed for a particular organization, any non-profit wishing to offer legal services can be set up to use the service.  The organization should provide the email addresses of people who are allowed to perform searches and store case information on the organization's behalf.  Currently, new organizations and users can be added only by the developers of the application.

## Deployment

This application is currently deployed at https://multnomah-legal-aid.herokuapp.com/.  To explore its capabilities, you may use the login `aclu1@gmail.com` and the password `password`.

## Usage

Once you're signed in, you'll see the following options in the navigation bar:

### Home

This is where you can see the cases that are being tracked by your organization.  All registered members of your organization can see and edit these documents.

To read the details of a document, double-click to open it.  The document shows the data from the Multnomah County Sheriff's Office on the right, and data added by members of your organization on the left.  You can edit your organization's data and save or cancel your changes.

### Search MSCO

To add new records, first search the MSCO database.  Enter any relevant criteria (name, date, time) and then press `Search`.  When the results appear (the button will say 'search' instead of 'loading'), you can put a check mark next to any record you would like to add to your organization's collection.  When you've selected the documents you want, click the 'Add' button at the bottom.  Click back to 'Home' in the navigation bar to see the new records.

## Authors

Claire Flanagan, Karen Painter, and Alex Rankin.
