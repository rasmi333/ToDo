package com.rasmi.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//tell spring that this is a controller
@CrossOrigin(origins="http://localhost:4200") //this used to allow Angular to use this service or this url
@RestController
public class HelloWorlController {
	
	//GET
	//URI -.hello-world
	//method -"Hello World/"
	
	//for request mapping instead of using @RequestMapping(method=RequestMethod.GET,path="/hello-world") we can use @GetMapping(path='/hello-world")
	//There are methods like PostMApping, Put MApping and many more
	@RequestMapping(method=RequestMethod.GET,path="/hello-world")
	public String helloWorld() {
		return "Hello-World";
	}
	
	
	//this method return bean of hello bean. It convert the response into json
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error has happened: ");
		return  new HelloWorldBean("Hello World Bean");
	}

	//ENhancinh hello world with path varibale
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVaribale(@PathVariable String name) {
		return  new HelloWorldBean(String.format("Hello World Bean, %s", name));
	}

}
