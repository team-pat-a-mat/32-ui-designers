"use client";

import { useState } from "react";
import LoaderComponent from "../components/loader/loader_component";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  if (loading) return <LoaderComponent />;
  return <main></main>;
}
