import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'topping',
  // visible name
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is it vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
