
## Simple Customer Web Apllication

This full customer simple web application.

- FrontEnd - Angular
- BackEnd -  Spring Boot with Mysql | Node.js with MongoDB

I have created two backends using Spring boot and Node.js for same Frontend.You cn use any backend.

Using this any beginner can study how to code with Angular,spring boot and nodejs.






## Run Locally

Clone the project

### FrontEnd

Inside the "..FrontEndAngular\Thogakade" directory run below code in the terminal.
```
ng serve
```

If u dont have Angular installed yet u can follow https://angular.io/guide/setup-local

After run ng serve open your browser on http://localhost:4200/


### BackEnd

####  SpringBoot 

Open the springboot project using Intellij idea.Refresh the Maven repository.

Open application.properties file and add your mysql username and password.

```
spring.datasource.url=jdbc:mysql://localhost:3306/Thogakade?createDatabaseIfNotExist=true
spring.datasource.username=username
spring.datasource.password=password
spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```


After run the project.


####  NodeJs

Not yet Complete.....
