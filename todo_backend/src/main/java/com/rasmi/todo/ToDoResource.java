package com.rasmi.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rasmi.todo.ToDo;
import com.rasmi.todo.TodoHardcodedService;

@RestController
public class ToDoResource {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<ToDo> getAllTodos(@PathVariable String username){
		return todoService.findall();
		
	}

}
