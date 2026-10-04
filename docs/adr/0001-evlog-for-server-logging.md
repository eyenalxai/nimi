# evlog for server-side logging

Server logging uses evlog (one structured wide event per request) rather than Effect. Effect would pull a complete effect-system runtime into an application whose only server need is observability, while evlog integrates directly with the Nitro-based TanStack Start server and drains to Railway-friendly sinks. The cost is adopting a younger library, accepted because the integration surface is small and the wide-event model fits the request lifecycle.
