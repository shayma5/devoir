import { Component, Input } from '@angular/core';
import { Article } from '../model/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() list2: Article[] = [];
}
