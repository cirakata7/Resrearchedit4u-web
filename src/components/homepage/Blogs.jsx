import React, { useMemo, useState } from "react";
import "../../assets/style/style.css";
import { CATS, POSTS, SERIES_HIGHLIGHTS, STANDALONE_GUIDES } from "../../assets/content/homepage/blog";

export default function BlogPage() {
  const cats = useMemo(() => CATS, []);
  const [activeCat, setActiveCat] = useState("All");
  const [q, setQ] = useState("");

  const filteredPosts = useMemo(() => {
    const needle = q.trim().toLowerCase();

    return POSTS.filter((p) => {
      // chip logic similar to your video:
      // Series = type Series, Standalone = type Guide
      const catOk =
        activeCat === "All" ||
        (activeCat === "Series" && p.type === "Series") ||
        (activeCat === "Standalone" && p.type === "Guide") ||
        p.category === activeCat;

      if (!catOk) return false;
      if (!needle) return true;

      const hay = [p.title, p.excerpt, p.type, p.category, ...(p.tags || [])]
        .join(" ")
        .toLowerCase();

      return hay.includes(needle);
    });
  }, [activeCat, q]);

  const filteredSeries = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const catOk = activeCat === "All" || activeCat === "Series";

    if (!catOk) return [];
    if (!needle) return SERIES_HIGHLIGHTS;

    return SERIES_HIGHLIGHTS.filter((x) =>
      (x.title + " " + x.desc).toLowerCase().includes(needle)
    );
  }, [activeCat, q]);

  const filteredGuides = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const catOk = activeCat === "All" || activeCat === "Standalone";

    if (!catOk) return [];
    if (!needle) return STANDALONE_GUIDES;

    return STANDALONE_GUIDES.filter((x) =>
      (x.title + " " + x.desc).toLowerCase().includes(needle)
    );
  }, [activeCat, q]);

  const clearAll = () => {
    setActiveCat("All");
    setQ("");
  };

  const hasAny =
    filteredPosts.length > 0 || filteredSeries.length > 0 || filteredGuides.length > 0;

  return (
    <section className="rmSection">
      <div className="rmWrap">
        <div className="rmShell">
          {/* Top header */}
          <div className="rmHeader">
            <div className="rmKicker">RE MINDS — GOOD READS</div>

            <div className="rmHeaderGrid">
              <div>
                <h1 className="rmH1">Resources to make every submission smarter.</h1>
               

                <div className="rmHeaderCtas">
                  <button className="rmBtnPrimary" type="button">
                    Explore RE Minds →
                  </button>
                  <button className="rmBtnGhost" type="button">
                    View all posts
                  </button>
                  
                </div>
              </div>

              {/* <div className="rmHeaderHint">
                <div className="rmHintTitle">Best for mobile:</div>
                <div className="rmHintText">
                  chips become a horizontal scroll; story cards swipe naturally; the rest stays
                  lightweight.
                </div>
              </div> */}
            </div>
          </div>

          {/* Toolbar */}
          <div className="rmToolbar">
            <div className="rmChips">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`rmChip ${activeCat === c ? "isActive" : ""}`}
                  onClick={() => setActiveCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="rmSearchWrap">
              <span className="rmSearchIcon">🔎</span>
              <input
                className="rmSearch"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search RE Minds (e.g., methods, abstract, review)"
              />
              {q.trim() && (
                <button className="rmClearX" type="button" onClick={() => setQ("")} aria-label="Clear">
                  ×
                </button>
              )}
              <button className="rmClearBtn" type="button" onClick={clearAll}>
                Clear
              </button>
            </div>
          </div>

          {/* Shelf */}
          {!hasAny ? (
            <div className="rmEmpty">
              <div className="rmEmptyTitle">No shelf cards match your filter.</div>
              <div className="rmEmptyText">Try “AI” or a shorter keyword.</div>
            </div>
          ) : (
            <>
              <div className="rmShelf">
                {filteredPosts.map((p) => (
                  <article key={p.id} className="rmCard">
                    <div className="rmCardTop">
                      <span className="rmPill">{p.type}</span>
                      <span className="rmMetaDot">•</span>
                      <span className="rmMeta">{p.category}</span>
                    </div>

                    <h3 className="rmCardTitle">{p.title}</h3>
                    <p className="rmCardDesc">{p.excerpt}</p>

                    <div className="rmTags">
                      {p.tags.map((t) => (
                        <span className="rmTag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="rmCardBottom">
                      <a className="rmOpenBtn" href={p.href}>
                        Open
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Lower panels like the video */}
              {/* <div className="rmPanels">
                <div className="rmPanel">
                  <div className="rmPanelHead">SERIES HIGHLIGHTS</div>

                  {filteredSeries.length === 0 ? (
                    <div className="rmPanelEmpty">No series match this filter/search.</div>
                  ) : (
                    <div className="rmPanelList">
                      {filteredSeries.map((x) => (
                        <a key={x.id} className="rmPanelItem" href={x.href}>
                          <div className="rmPanelItemTitle">{x.title}</div>
                          <div className="rmPanelItemDesc">{x.desc}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rmPanel">
                  <div className="rmPanelHead">STANDALONE GUIDES</div>

                  {filteredGuides.length === 0 ? (
                    <div className="rmPanelEmpty">No guides match this filter/search.</div>
                  ) : (
                    <div className="rmPanelList">
                      {filteredGuides.map((x) => (
                        <a key={x.id} className="rmPanelItem" href={x.href}>
                          <div className="rmPanelItemTitle">{x.title}</div>
                          <div className="rmPanelItemDesc">{x.desc}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
