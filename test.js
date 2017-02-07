var assert = require('assert');
var worddiff = require('./index.js');

describe('word-diff', function() {
  describe('#diffString(old, new)', function() {

    it('identical', function() {
      var diff = worddiff.diffString('apple', 'apple');
      assert.deepEqual(diff, [{text: 'apple'}])
    });

    it('trivial diff', function() {
      var diff = worddiff.diffString('apple', 'cider');
      assert.deepEqual(diff, [
        {remove: 'apple', add: 'cider'}
      ])
    });

    it('simple add', function() {
      var diff = worddiff.diffString('apple', 'apple cider');
      assert.deepEqual(diff, [
        {text: 'apple'},
        {remove: '', add: 'cider'},
      ])
    });

    it('simple remove', function() {
      var diff = worddiff.diffString('apple computer', 'apple');
      assert.deepEqual(diff, [
        {text: 'apple '}, 
        {remove: 'computer', add: ''}
      ])
    });

    it('ignore whitespace changes', function() {
      var diff = worddiff.diffString('apple  ', 'apple     \n ');
      assert.deepEqual(diff, [
        {text: 'apple  '}
      ])
    });

    it('preserve whitespaces', function() {
      var diff = worddiff.diffString('good guy', 'bad \n guy');
      assert.deepEqual(diff, [
        {add: 'bad \n ', remove: 'good '},
        {text: 'guy'}
      ])
    });

    it('multiword overwrite in the middle', function() {
      var diff = worddiff.diffString('foo bar baz tiri biri bimm boo!', 'foo bar baz Yoo Higiri Hipp Hopp boo!');
      assert.deepEqual(diff, [
        {text: 'foo bar baz '},
        {add: 'Yoo Higiri Hipp Hopp ', remove: 'tiri biri bimm '},
        {text: 'boo!'},
      ])
    });

    it('multiword remove in the middle', function() {
      var diff = worddiff.diffString('Apple, you are a Legend!', 'Apple, Legend!');
      assert.deepEqual(diff, [
        {text: 'Apple, '},
        {add: '', remove: 'you are a '},
        {text: 'Legend!'},
      ]);
    });
  });
});
