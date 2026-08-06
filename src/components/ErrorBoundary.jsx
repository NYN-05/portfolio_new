import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio error boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <p className="flex h-14 w-14 items-center justify-center rounded-2xl bg-signal/10 font-mono text-xl font-bold text-signal">
            !
          </p>
          <h1 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Something broke
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            An unexpected error crashed this page. The rest of the site is fine —
            reload and pick up where you left off.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
            >
              Reload page
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Back home</Link>
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
