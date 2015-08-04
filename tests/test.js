import assert from 'assert';
import { bindLast } from '../module';

it('should make a function bindable', () => {
  const hasPropLast = (prop, data) => !!data[prop];

  const hasThisLast = hasPropLast::bindLast()

  const data = {
    id: 1,
    name: 'foo'
  };

  assert.strictEqual(data::hasThisLast('name'), true);
  assert.strictEqual(data::hasThisLast('nope'), false);
});

