import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

listPost=[
	{
	  title: 'Bienvenue sur mon blog',
	  content: 'Bonjour et je vous souhaite un joyeux voyage sur mon blog.',
	  loveIts:-2

	},{
	 title: 'J-50 avant...',
	  content: 'Bonjour, dans 50 jours il y aura un important post sur ce blog.',
	  loveIts: 1
	 //ceated_at: new Date()
	},
	{
	 title: 'J-30 avant...',
	  content: 'Plus que 30 jours avant le jour si attendu.',
	  loveIts: 0}
	];

}
