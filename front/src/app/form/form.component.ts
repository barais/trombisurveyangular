import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   // 'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = '';
  json = {
        elements: [

            {
                name: 'name',
                type: 'text',
                title: 'Entrer votre Nom Prénom',
                placeHolder: 'Barais Olivier',
                isRequired: true
            }, {
                name: 'birthdate',
                type: 'text',
                inputType: 'date',
                title: 'Votre date de naissance:',
                isRequired: true
            },
            {
                type: 'radiogroup',
                name: 'spe',
                title: 'Votre spécialité',
                isRequired: true,
                colCount: 4,
                choices: [
                    'IL',
                    'ILA',
                    'RSH',
                    'Cyber',
                    'CCN'
                ]
            },
            {
                name: 'photo',
                type: 'photocapture',
                title: 'Prenez une jolie photo',
                isRequired: true
            },
            {
                name: 'email',
                type: 'text',
                inputType: 'email',
                title: 'Votre e-mail:',
                placeHolder: 'barais@irisa.fr',
                isRequired: true,
                validators: [
                    {
                        type: 'email'
                    }
                ]
            }
        ]
  };

// model = null;

constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSurveySaved(survey) {
      console.log(survey);
    this.json = survey;
  }

  sendData(result) {
        this.http.post('/api/photo', result, httpOptions).subscribe(res => console.log(res));
  }

}
