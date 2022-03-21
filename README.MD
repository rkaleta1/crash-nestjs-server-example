# Reproduction repository for a server crashing bug in nestjs

Reproduce a bug where 2 promises with specific errors crash the server
* The first promise has to throw an exception
* The second promise function needs to have a parameter, and the argument to that function needs to be trying to access a property of an undefined value