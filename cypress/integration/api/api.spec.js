let id;
describe('API tests', () => {
  it('GET check get all todos from db | empty array', () => {
    cy.request('GET', 'https://cryptic-ravine-29648.herokuapp.com/todos').then(
      (res) => {
        expect(res).to.have.property('status', 200);
        expect(res.body).to.not.null;
        expect(res.body).to.have.length(0);
      },
    );
  });

  it('POST check add new todos to bd', () => {
    cy.request('POST', 'https://cryptic-ravine-29648.herokuapp.com/todos', {
      title: 'Todo this',
      data: '20.20.2020',
      status: false,
      mark: false,
    }).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
    });
  });

  it('GET check get all todos from db | exist 1 todo', () => {
    cy.request('GET', 'https://cryptic-ravine-29648.herokuapp.com/todos').then(
      (res) => {
        id = res.body[0]._id;

        expect(res).to.have.property('status', 200);
        expect(res.body).to.not.null;
        expect(res.body).to.have.length(1);
      },
    );
  });

  it('PUT check', () => {
    cy.request('PUT', 'https://cryptic-ravine-29648.herokuapp.com/todos', {
      title: 'Title was changed',
      data: '21.21.2121',
      status: true,
      mark: true,
      _id: id,
    }).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
    });
  });

  it('GET check get todo by id', () => {
    cy.request(
      'GET',
      `https://cryptic-ravine-29648.herokuapp.com/todos/${id}`,
    ).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
      expect(res.body).to.have.property('title', 'Title was changed');
    });
  });

  it('DELETE check delete todo by id', () => {
    cy.request(
      'DELETE',
      `https://cryptic-ravine-29648.herokuapp.com/todos/${id}`,
    ).then((res) => {
      expect(res).to.have.property('status', 200);
      expect(res.body).to.not.null;
      expect(res.body).to.have.property('_id', id);
    });
  });
});
