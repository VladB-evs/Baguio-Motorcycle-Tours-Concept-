import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BurnhamPark from "@/pages/attractions/burnham-park";
import CampJohnHay from "@/pages/attractions/camp-john-hay";
import SessionRoad from "@/pages/attractions/session-road";
import MinesView from "@/pages/attractions/mines-view";
import BaguioCathedral from "@/pages/attractions/baguio-cathedral";
import WrightPark from "@/pages/attractions/wright-park";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/attractions/burnham-park" component={BurnhamPark} />
      <Route path="/attractions/camp-john-hay" component={CampJohnHay} />
      <Route path="/attractions/session-road" component={SessionRoad} />
      <Route path="/attractions/mines-view" component={MinesView} />
      <Route path="/attractions/baguio-cathedral" component={BaguioCathedral} />
      <Route path="/attractions/wright-park" component={WrightPark} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;