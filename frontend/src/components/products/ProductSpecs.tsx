interface ProductSpecsProps {
  specs: Record<string, string>;
  specsAr: Record<string, string>;
  lang?: "fr" | "ar";
}

export function ProductSpecs({ specs, specsAr, lang = "fr" }: ProductSpecsProps) {
  const data = lang === "ar" ? specsAr : specs;

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full">
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr
              key={key}
              className={index % 2 === 0 ? "bg-muted/50" : "bg-white"}
            >
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary w-2/5 border-b border-border">
                {key}
              </th>
              <td className="px-4 py-3 text-sm text-muted-foreground border-b border-border">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
