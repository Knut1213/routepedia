export default function () {
  this.namespace = '/api';

  let skitours = [{
      type: 'skitours',
      id: 'gamsfeld-sonnseitn',
      attributes: {
        title: 'Gamsfeld Sonnseitn',
        start: 'Russbach',
        difficulty: 'easy',
        duration: 3,
        heightdifference: 1200,
        exposition: 'SW',
        description: 'Just an easy tour with a great view from the top of the mountain.'
      }
    },
    {
      type: 'skitours',
      id: 'hochkasern',
      attributes: {
        title: 'Hochkasern',
        start: 'Hintermoos',
        difficulty: 'easy',
        duration: 3,
        heightdifference: 1100,
        exposition: 'NNW',
        description: 'Tour over three mountaintops with a possibly great slope at the end.'
      }
    }
  ];

  this.get('/skitours', function (db, request) {
    if (request.queryParams.start !== undefined) {
      let filteredSkitours = skitours.filter(function (i) {
        return i.attributes.start.toLowerCase()
          .indexOf(request.queryParams.start.toLowerCase()) !== -1;
      });
      return {
        data: filteredSkitours
      };
    } else {
      return {
        data: skitours
      };
    }
  })

  this.get('/skitours/:id', function (db, request) {
    return {
      data: skitours.find((skitour) => request.params.id === skitour.id)
    };
  })
}