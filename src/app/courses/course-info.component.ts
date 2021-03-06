import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

    ngOnInit(): void {
        this.courseService.retriById(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe({
            next: course => {
                this.course = course;
            },
            error: ex => console.log('Error:', ex)
        });
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => {
                console.log("Salvo com sucesso!", course);
            },
            error: ex => console.log("Error:", ex)
        });
    }

}