package com.rasmi.todo;
import com.rasmi.todo.ToDo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

// this class will be used like database

@Service
public class TodoHardcodedService {
	
	private static List<ToDo> todos = new ArrayList();
	private static int idCounter = 0;
	static
	{
	todos.add(new ToDo(++idCounter,"Rasmi Wagle", "Learn Angular", new Date(), false));
	todos.add(new ToDo(++idCounter,"Rasmi Wagle", "Learn Spring Boot", new Date(), false));
	todos.add(new ToDo(++idCounter,"Rasmi Wagle", "Learn to Connect Angular with SpringBoot", new Date(), false));
	todos.add(new ToDo(++idCounter,"Rasmi Wagle", "Learn to create great userinterface", new Date(), false));

	}
	public List<ToDo> findall(){
		return todos;
	}

}
