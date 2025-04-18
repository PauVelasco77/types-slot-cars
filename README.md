# Types Slot Cars

A TypeScript package for managing and working with slot car data.

## Features

- Provides type definitions and Zod schemas for slot cars.
- Easy to integrate into TypeScript projects.
- Lightweight and efficient.

## Installation

Install the package using Bun:

```bash
bun add types-slot-cars
```

## Usage

Import the schemas and types into your TypeScript project:

```typescript
import { CarSchema, Car } from '@types/slot-cars';

const car: Car = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Speedster",
  make: "Fast Wheels",
  model: "X200",
  brand: "Speedy",
  year: 2023,
  reference: "FW-X200",
  scale: "1:32",
  images: {
    perspective_front: "https://example.com/images/car-front.jpg",
    perspective_rear: "https://example.com/images/car-rear.jpg"
  },
  category: ["Modern GT"]
};

// Validate the car object using the schema
const parsedCar = CarSchema.parse(car);
console.log(parsedCar);
```

## Scripts

The following Bun scripts are available:

- `release:patch`: Deploy a patch version.
- `release:minor`: Deploy a minor version.
- `release:major`: Deploy a major version.

## Development

### Prerequisites

- Bun (v0.5.0 or later)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/types-slot-cars.git
   cd types-slot-cars
   ```

2. Install dependencies:
   ```bash
   bun install
   ```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
