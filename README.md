# Types Slot Cars

TypeScript type definitions and Zod schemas for slot car racing data.

## Features

- Complete TypeScript definitions for slot cars, categories, and related entities
- [Zod](https://github.com/colinhacks/zod) schemas for runtime validation
- Type-safe operations on slot car data

## Installation

```bash
# Using Bun
bun add types-slot-cars

# Using npm
npm install types-slot-cars

# Using yarn
yarn add types-slot-cars
```

## Usage

### Working with Car Schema

```typescript
import { CarSchema, Car, CATEGORIES } from 'types-slot-cars';

// Create a car object
const car: Car = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Mercedes-AMG GT3",
  make: "Mercedes",
  model: "AMG GT3",
  brand: "Carrera",
  year: 2020,
  reference: "CA-27622",
  scale: "1:32",
  images: {
    perspective_front: "https://example.com/images/mercedes-amg-front.jpg",
    perspective_rear: "https://example.com/images/mercedes-amg-rear.jpg"
  },
  category: [CATEGORIES.MODERN_GT]
};

// Validate the car using Zod schema
const validatedCar = CarSchema.parse(car);
console.log(validatedCar);

// Type-check partial car data
const partialCarData: Partial<Car> = {
  name: "Porsche 911 GT3",
  brand: "Scalextric"
};
```

### Working with Categories

```typescript
import { Category, CATEGORIES } from 'types-slot-cars';

// Available categories
console.log(Object.values(CATEGORIES));
// Output: ["Classic DTM", "Group C", "Classic", ...]

// Create a category
const category: Category = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: CATEGORIES.RALLY,
  description: "Modern rally cars from WRC and similar competitions"
};
```

## Development

### Prerequisites

- [Bun](https://bun.sh/) v0.6.0 or higher
- Git

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Build the package:
   ```bash
   bun run build
   ```

### Available Scripts

- `bun run build` - Transpile TypeScript to JavaScript
- `bun run publish:patch` - Publish a patch version
- `bun run publish:minor` - Publish a minor version
- `bun run publish:major` - Publish a major version

## License

MIT
