import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {

  data = [];
  id: number;
  checkVisiblity = 'Y';
  correct: number;
  elements = [];
  timeAll;

  constructor(private dataservice: DataService, public router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.elements = [];
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = Number(params['id']);
    });

    if (this.id > 5){
      this.router.navigate(['/', 'results']);
    }
    this.data = this.dataservice.getArray();
    const remove = Math.floor(Math.random() * 7);
    this.correct = this.data[remove];
    this.data[remove] = 0;
    const positions = Math.floor(Math.random() * 3);
    this.elements.push(Math.floor(Math.random() * 16));
    this.elements.push(Math.floor(Math.random() * 16));
    this.elements.push(Math.floor(Math.random() * 16));
    this.elements[positions] = this.correct;
    this.timeAll = setTimeout(() => {
      clearTimeout(this.timeAll);
      const node = document.getElementById('divdata');
      const node1 = document.getElementById('divdata1');
      const node2 = document.getElementById('divdata2');
      const node3 = document.getElementById('divdata3');
      node1.style.display = 'none';
      node2.style.display = 'none';
      node3.style.display = 'none';
      const textnode = document.createTextNode(String(this.correct));
      node.appendChild(textnode);
      node.style.boxShadow = '4px 4px 20px #FF0000';
      this.toastr.error('La Respuesta Correcta es ' + this.correct);
      setTimeout(() => {
        node.removeChild(node.lastChild);
        node.style.boxShadow = '4px 4px 20px #999';
        node1.style.display = 'inline';
        node2.style.display = 'inline';
        node3.style.display = 'inline';
        this.id += 1;
        if (this.id > 5){
          this.router.navigate(['/', 'results']);
        }else{
          const context = this;
          context.checkVisiblity = 'N';
          setTimeout(() => {
            context.checkVisiblity = 'Y';
          }, 10);
          this.router.navigate(['/sequence/', this.id]);
          this.ngOnInit();
        }
      }, 1000);
    }, 10000);
  }
  // tslint:disable-next-line:typedef
  isCorrect(value){
    clearTimeout(this.timeAll);
    const node = document.getElementById('divdata');
    const node1 = document.getElementById('divdata1');
    const node2 = document.getElementById('divdata2');
    const node3 = document.getElementById('divdata3');
    node1.style.display = 'none';
    node2.style.display = 'none';
    node3.style.display = 'none';
    const textnode = document.createTextNode(String(this.correct));
    node.appendChild(textnode);
    if (value === this.correct){
      node.style.boxShadow = '4px 4px 20px #1CB65C';
      this.dataservice.results += 20;
      this.toastr.success('Respuesta Correcta');
    }else{
      node.style.boxShadow = '4px 4px 20px #FF0000';
      this.toastr.error('La Respuesta Correcta es ' + this.correct);
    }
    setTimeout(() => {
      node.removeChild(node.lastChild);
      node.style.boxShadow = '4px 4px 20px #999';
      node1.style.display = 'inline';
      node2.style.display = 'inline';
      node3.style.display = 'inline';
      this.id += 1;
      if (this.id > 5){
        this.router.navigate(['/', 'results']);
      }else{
        const context = this;
        context.checkVisiblity = 'N';
        setTimeout(() => {
          context.checkVisiblity = 'Y';
        }, 10);
        this.router.navigate(['/sequence/', this.id]);
        this.ngOnInit();
      }
  }, 1000);
  }
}
