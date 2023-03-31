package com.example.teamProject.controller;

import com.example.teamProject.model.Employee;
import com.example.teamProject.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controller {
    @Autowired
    EmployeeService employeeService;


    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

//    @GetMapping("/")
//    public String welcome(){
//        return "Welcome!";
//    }
    @GetMapping("/employees/id/{id}")
    public Employee getEmployee(@PathVariable int id){
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/employees/name/{name}")
    public Employee getEmployee(@PathVariable String name){
        return employeeService.getEmployeeByName(name);
    }


    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee e){
        return employeeService.addEmployee(e);
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee e){
        return employeeService.updateEmployee(e);
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable int id ){
        return employeeService.deleteEmployeeById(id);
    }
}
