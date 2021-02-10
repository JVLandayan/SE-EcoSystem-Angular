import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { articlelist } from '../models/articleslist.model';

@Pipe({
  name: 'articles',
  pure:false
})
export class ArticlesPipe implements PipeTransform {

  transform(items: articlelist[], pageNum: number): any {
    if (items.length===0) {
      return items
    }


    for (const item of items) {
      const resultArray = []
      const elementperPage = 6
      if (items.length <= elementperPage) {
        resultArray.push(item)
      }
      return resultArray

    }
  }

}
