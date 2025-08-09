import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type Filters = {
  era?: string;
  location?: string;
  personality?: string;
  sort?: "newest" | "oldest" | "haunted";
};

export default function Filters({
  eras,
  locations,
  personalities,
  value,
  onChange,
}: {
  eras: string[];
  locations: string[];
  personalities: string[];
  value: Filters;
  onChange: (f: Filters) => void;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      <Select value={value.era ?? "__all__"} onValueChange={(v) => onChange({ ...value, era: v === "__all__" ? undefined : v })}>
        <SelectTrigger>
          <SelectValue placeholder="Era of Death" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">All</SelectItem>
          {eras.map((e) => (
            <SelectItem key={e} value={e}>{e}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={value.location ?? "__all__"} onValueChange={(v) => onChange({ ...value, location: v === "__all__" ? undefined : v })}>
        <SelectTrigger>
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">All</SelectItem>
          {locations.map((e) => (
            <SelectItem key={e} value={e}>{e}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={value.personality ?? "__all__"} onValueChange={(v) => onChange({ ...value, personality: v === "__all__" ? undefined : v })}>
        <SelectTrigger>
          <SelectValue placeholder="Personality" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">All</SelectItem>
          {personalities.map((e) => (
            <SelectItem key={e} value={e}>{e}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={value.sort} onValueChange={(v: any) => onChange({ ...value, sort: v })}>
        <SelectTrigger>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest departure</SelectItem>
          <SelectItem value="oldest">Oldest departure</SelectItem>
          <SelectItem value="haunted">Most haunted (price)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
