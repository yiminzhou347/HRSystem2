package com.example.teamProject.service;

import com.example.teamProject.dao.EmployeeDao;
import com.example.teamProject.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImp implements EmployeeService{
    @Autowired
    EmployeeDao employeeDao;

    @Override
    public List<Employee> getAllEmployee() {
        List<Employee> list=null;
        list = employeeDao.findAll();
        return list;
    }

    @Override
    public Employee getEmployeeById(int id) {
        Optional<Employee> employee = employeeDao.findById(id);
        if(employee.isPresent()){
            return employee.get();
        }else{
            throw new RuntimeException("Employee is not found with id: " + id);
        }
    }

    @Override
    public Employee getEmployeeByName(String name) {
        Optional<Employee> employee = Optional.ofNullable(employeeDao.findByName(name));
        if(employee.isPresent()){return employee.get();}
        else{
            throw new RuntimeException("Employee is not found with name: " + name);
        }
    }
    @Override
    public Employee addEmployee(Employee employee) {
        BCryptPasswordEncoder bcrypt =new BCryptPasswordEncoder();
        String encrypted = bcrypt.encode(employee.getPassword());
        employee.setPassword(encrypted);
        employeeDao.save(employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        employeeDao.save(employee);
        return employee;
    }

    @Override
    public String deleteEmployeeById(int id) {
        employeeDao.deleteById(id);
        return "Employee "+id +" has been deleted.";
    }




}
