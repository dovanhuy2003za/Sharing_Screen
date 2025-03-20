# Contributing

Thank you for your interest in contributing to this application! This document provides guidelines and steps for contributing.

## Development Setup

1. Fork the repository

2. Clone your fork:

```bash
git clone https://github.com/your-username/screen-sharing.git
```

3. Navigate to the project directory:

```bash
cd screen-sharing
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

Alternatively, you can use Docker:

```bash
docker compose up
```

## Making Changes

1. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Test your changes
4. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/):

-   `feat`: New features
-   `fix`: Bug fixes
-   `docs`: Documentation changes
-   `style`: Code style changes (formatting, semicolons, etc)
-   `refactor`: Code refactoring
-   `test`: Adding or updating tests
-   `chore`: Maintenance tasks, dependencies
-   `perf`: Performance improvements
-   `ci`: CI/CD configuration changes
-   `build`: Changes to build system or dependencies

Example:

```bash
feat: add new feature
fix: resolve some bug
docs: update README
```

5. Push to your fork:

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request

## Pull Request Guidelines

-   Follow the existing code style
-   Include clear description of changes
-   Keep changes focused and atomic
-   Add tests if applicable
-   Update documentation if needed

## Questions or Problems?

Open an issue in the repository if you:

-   Found a bug
-   Have a feature request
-   Need help with setup

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
