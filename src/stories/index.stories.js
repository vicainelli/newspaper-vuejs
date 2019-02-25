/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import NewsSingleBlock from '../components/NewsSingleBlock.vue'

storiesOf('News Single Block', module)
  .add('with text', () => ({
    components: { NewsSingleBlock },
    template: '<news-single-block  title="Turkey’s Currency Crisis Tests Erdogan’s Approach" author="CARLOTTA GALL" date="6:17 PM" content="Turkey’s worst economic crisis since 2001 has confronted President Recep Tayyip Erdogan with the limits of his authoritarian approach, and could end his long run of success."></news-single-block>',
  }))