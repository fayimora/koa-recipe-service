import agent from '../util/agent';
import { expect } from 'chai';

import { server } from '../../lib/server';

describe('Recipe Endpoint', function () {
  after((done) => {
    server.close();
    done();
  });

  it('Get /api/recipe should return a list of recipes', () => {
    return agent()
      .get('/api/recipes/')
      .expect(200)
      .expect((res) => {
        return expect(res.body).to.be.an('Array').and.have.length.above(0);
      });
  });

  describe('Recipe Endpiint Filter,', () => {
    it('Get /api/recipe should return a list of recipes when filter \'name=chicken\' is applied', () => {
      return agent()
        .get('/api/recipes?name=chicken')
        .expect(200)
        .expect((res) => {
          return expect(res.body).to.be.an('Array').and.have.length.above(0);
        });
    });

    it('Get /api/recipe not should return a list of recipes with non-existing name', () => {
      return agent()
        .get('/api/recipes?name=amala')
        .expect(404)
        .expect((res) => {
          return expect(res.body.message).to.be.equal('Sorry, nothing matched your filter term');
        });
    });

    it('Get /api/recipe should return a list of recipes when filter \'cookingTime=30\' is applied', () => {
      return agent()
        .get('/api/recipes?cookingTime=25')
        .expect(200)
        .expect((res) => {
          return expect(res.body).to.be.an('Array').and.have.length.above(0);
        });
    });

    it('Get /api/recipe not should return a list of recipes non-existing time', () => {
      return agent()
        .get('/api/recipes?cookingTime=200')
        .expect(404)
        .expect((res) => {
          return expect(res.body.message).to.be.equal('Sorry, nothing matched your filter term');
        });
    });

    it('Get /api/recipe should return a list of recipes when filter \'ingredients=lemon\' is applied', () => {
      return agent()
        .get('/api/recipes?ingredients=lemon')
        .expect(200)
        .expect((res) => {
          return expect(res.body).to.be.an('Array').and.have.length.above(0);
        });
    });

    it('Get /api/recipe not should return a list of recipes non-existing ingredients', () => {
      return agent()
        .get('/api/recipes?ingredients=Lamb shank')
        .expect(404)
        .expect((res) => {
          return expect(res.body.message).to.be.equal('Sorry, nothing matched your filter term');
        });
    });
  });
  describe('Recipe Data', () => {
    it('Get api/recipe?name=chicken to contain recipe with chicken in name', () => {
      return agent()
        .get('/api/recipes?name=chicken')
        .expect(200)
        .expect((res) => {
          const recipe = res.body[0];
          return expect(recipe.name).to.contain('Chicken');
        });
    });

    it('Get api/recipe?ingredients=lemon to contain recipe with lemon as ingredient', () => {
      return agent()
        .get('/api/recipes?ingredients=lemon')
        .expect(200)
        .expect((res) => {
          const recipe = res.body[0];
          return expect(recipe.ingredients).to.include('lemon');
        });
    });

    it('Get api/recipe?cookingTime=25 to contain recipe with chicken in name', () => {
      return agent()
        .get('/api/recipes?cookingTime=25')
        .expect(200)
        .expect((res) => {
          const recipe = res.body[0];
          return expect(recipe.cookingTime).to.be.equal(25);
        });
    });
  });
});
