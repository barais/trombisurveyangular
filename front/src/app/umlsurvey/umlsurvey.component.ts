import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umlsurvey',
  templateUrl: './umlsurvey.component.html',
  styleUrls: ['./umlsurvey.component.css']
})
export class UmlsurveyComponent implements OnInit {

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
                name: 'uml',
                type: 'uml',
                title: 'Faites un joli diagram uml',
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

constructor() { }

  ngOnInit() {
  }

  onSurveySaved(survey) {
      console.log(survey);
    this.json = survey;
  }

  sendData(result) {
       console.log(result);
  }

}
