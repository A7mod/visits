# visits

In the Docker course I'm currently undergoing, there's this project where we have to create an application of a service which tells us the number of visits on the said page. 
So here we've used two containers, one for Node App and one for Redis. (present on the computer)

Skipping the head hurting and troublesome technique of follwing long haul docker CLI's networking feature to connect the two since both the container are running separately but,
they're supposed to run in unison for us to be able to access the aformentioned localhost, we use docker-compose.. 

This has helped wonders and yes, guessed it right, its used to start uo multiple docker containers at the same time.
