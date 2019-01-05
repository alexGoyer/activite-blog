import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	@Input() title:string;
	@Input() content:string;
	@Input() loveIts:number;
	@Input() created_at:Date;

  constructor() { 
  	this.created_at=new Date();}

  ngOnInit() {
  }
	addLove()
	{
		this.loveIts++;
		this.getColorPost();
	}

	deleteLove()
	{
		this.loveIts--;
		this.getColorPost();
	}
	
	getColorPost()
	{
		if(this.loveIts>0)
			return 'green';
		else if(this.loveIts<0)
			return 'red';
	}
}
