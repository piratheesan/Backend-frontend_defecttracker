package com.pirathee.DefectTracker_assignment.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pirathee.DefectTracker_assignment.model.Project;
import com.pirathee.DefectTracker_assignment.repository.DefectRepository;
import com.pirathee.DefectTracker_assignment.repository.ProjectRepository;


@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ProjectController {
	
	@Autowired
	ProjectRepository projectRepository;
	
	@Autowired
	DefectRepository defectRepository;
	
	
	//Add new Project
	@PostMapping(value="/project")
	public void addProject(@RequestBody Project project)
	{
		projectRepository.save(project);
	}
	
	
	//List All Projects
	@GetMapping(value="/project")
	public List<Project> getAllProjects()
	{
		return projectRepository.findAll();
	}
	
	
	//List Project By Project Id
	@GetMapping(value="/project/{id}")
	public Project getProjectById(@PathVariable String id)
	{
		return projectRepository.findByProjectId(id);
	}
	
	// Edit a Project
	@PutMapping(value = "/project/update/{pid}")
		public void updateDefect(@RequestBody Project project, @PathVariable String pid) 
	    {  
			projectRepository.save(project);
		}
		
		
	// Remove a Project
	@DeleteMapping(value = "/project/{id}")
		public void deleteProject(@PathVariable String id) {
			projectRepository.deleteById(id);
		}
		
		
	
}
