import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ArrowLeft, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import {
  opportunityTypes,
  opportunityStages,
  opportunityDeadlines,
  opportunityEquity,
  opportunitySorts,
} from '../data/opportunities';

const selectStyle: React.CSSProperties = {
  width: '100%',
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundColor: '#ffffff',
  border: '1px solid #dce7e4',
  borderRadius: '12px',
  padding: '12px 38px 12px 14px',
  fontSize: '13.5px',
  color: '#0f172a',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s ease',
};

const FilterSelect: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}> = ({ label, value, onChange, options }) => (
  <div style={{ marginBottom: '20px' }}>
    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
      {label}
    </label>
    <div style={{ position: 'relative' }}>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={selectStyle}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown size={16} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
    </div>
  </div>
);

const SkeletonCard: React.FC = () => {
  return (
    <div
      style={{
        borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid #eef2f1',
        padding: '32px 30px',
      }}
    >
      <div className="grant-shimmer" style={{ width: '26%', height: '18px', borderRadius: '9999px', marginBottom: '24px' }} />
      <div className="grant-shimmer" style={{ width: '84%', height: '20px', borderRadius: '9999px', marginBottom: '18px' }} />
      <div className="grant-shimmer" style={{ width: '58%', height: '20px', borderRadius: '9999px' }} />
    </div>
  );
};

export const GrantsSearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [sector, setSector] = useState('All Sectors');
  const [country, setCountry] = useState('All Countries');
  const [stage, setStage] = useState('All Stages');
  const [deadline, setDeadline] = useState('any');
  const [equity, setEquity] = useState('any');
  const [sort, setSort] = useState('relevant');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searching, setSearching] = useState(true);

  // Simulate a lookup, then settle on the empty state.
  useEffect(() => {
    setSearching(true);
    const timer = window.setTimeout(() => setSearching(false), 800);
    return () => window.clearTimeout(timer);
  }, [query, type, sector, country, stage, deadline, equity, sort]);

  const hasActiveFilters =
    query.trim() !== '' || type !== 'all' || sector !== 'All Sectors' ||
    country !== 'All Countries' || stage !== 'All Stages' || deadline !== 'any' || equity !== 'any';

  const clearAll = () => {
    setQuery(''); setType('all'); setSector('All Sectors'); setCountry('All Countries');
    setStage('All Stages'); setDeadline('any'); setEquity('any'); setSort('relevant');
  };

  const filters = (
    <>
      <FilterSelect label="Type" value={type} onChange={setType} options={opportunityTypes} />
      <FilterSelect label="Sector" value={sector} onChange={setSector} options={[{ value: 'All Sectors', label: 'All Sectors' }]} />
      <FilterSelect label="Country" value={country} onChange={setCountry} options={[{ value: 'All Countries', label: 'All Countries' }]} />
      <FilterSelect label="Stage" value={stage} onChange={setStage} options={opportunityStages.map((s) => ({ value: s, label: s }))} />
      <FilterSelect label="Deadline" value={deadline} onChange={setDeadline} options={opportunityDeadlines} />
      <FilterSelect label="Equity" value={equity} onChange={setEquity} options={opportunityEquity} />
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          style={{ width: '100%', padding: '11px', borderRadius: '12px', border: '1px solid #99f6e4', backgroundColor: '#f0fdfa', color: '#125651', fontWeight: 700, fontSize: '13px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '6px' }}
        >
          <RotateCcw size={14} /> Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <>
      <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '120px 48px 100px 48px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'grid', gridTemplateColumns: '310px 1fr', gap: '32px', alignItems: 'start' }} className="grants-search-grid">
          
          {/* LHS Sticky Filters Sidebar */}
          <aside
            style={{
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(20,184,166,0.35)',
              padding: '24px 20px',
              position: 'sticky',
              top: '90px',
              maxHeight: 'calc(100vh - 110px)',
              overflowY: 'auto',
              boxShadow: '0 8px 24px -4px rgba(18,86,81,0.06)',
              zIndex: 10,
            }}
            className="grants-filters"
          >
            <div
              onClick={() => setFiltersOpen(!filtersOpen)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: '18px', paddingBottom: '14px', borderBottom: '1px solid #f1f5f9' }}
              className="grants-filters-toggle"
            >
              <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', color: '#0f172a', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={15} style={{ color: '#1a7b74' }} /> FILTERS
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {hasActiveFilters && (
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#1a7b74', backgroundColor: '#e6f4f1', padding: '2px 8px', borderRadius: '9999px' }}>
                    Active
                  </span>
                )}
                <ChevronDown size={17} style={{ color: '#64748b', transform: filtersOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} className="grants-filters-chevron" />
              </div>
            </div>
            <div className={filtersOpen ? 'grants-filters-body open' : 'grants-filters-body'}>
              {filters}
            </div>
          </aside>

          {/* RHS Main Search & Results Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Top Navigation & Search Box */}
            <div>
              <button
                onClick={() => navigate('/grants')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #dce7e4', borderRadius: '9999px', padding: '9px 18px', fontWeight: 700, fontSize: '13px', cursor: 'pointer', marginBottom: '14px', fontFamily: 'inherit' }}
              >
                <ArrowLeft size={14} /> Back to Grants
              </button>

              <div style={{ borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid rgba(20,184,166,0.35)', padding: '20px 24px', boxShadow: '0 8px 24px -6px rgba(18,86,81,0.08)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', flex: '1 1 360px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search grants, fellowships, accelerators..."
                      style={{ width: '100%', boxSizing: 'border-box', backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '9999px', padding: '14px 20px 14px 48px', fontSize: '14.5px', outline: 'none' }}
                    />
                  </div>
                  <button
                    onClick={() => {}}
                    style={{ backgroundColor: '#0f2f3d', color: '#ffffff', border: 'none', borderRadius: '9999px', padding: '14px 34px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer', boxShadow: '0 8px 20px -6px rgba(15,47,61,0.4)' }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count & Sort Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '16px', color: '#0f172a', margin: 0 }}>
                {searching ? (
                  <span style={{ color: '#64748b' }}>Searching opportunities...</span>
                ) : (
                  <><strong style={{ fontWeight: 800 }}>0</strong> opportunities found</>
                )}
              </p>
              <div style={{ position: 'relative' }}>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{ appearance: 'none', WebkitAppearance: 'none', backgroundColor: '#ffffff', border: '1px solid rgba(20,184,166,0.4)', borderRadius: '12px', padding: '10px 38px 10px 16px', fontSize: '13.5px', fontWeight: 600, color: '#0f172a', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  {opportunitySorts.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <ChevronDown size={16} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#0f172a', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Results / Empty / Skeleton State */}
            {searching ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }} className="grants-skeleton-grid">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 24px', borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid #eef2f1', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                <span style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#e6f4f1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Search size={30} style={{ color: '#0d9488' }} />
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>No opportunities found</h3>
                <p style={{ fontSize: '14.5px', color: '#94a3b8', marginBottom: '24px' }}>Try different keywords or remove some filters</p>
                <button
                  onClick={clearAll}
                  className="btn-secondary"
                  style={{ padding: '11px 26px', fontSize: '14px' }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />

      <style>{`
        @keyframes grantShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .grant-shimmer {
          background: linear-gradient(90deg, #eef1f4 25%, #f7faf9 50%, #eef1f4 75%);
          background-size: 200% 100%;
          animation: grantShimmer 1.4s linear infinite;
        }
        .grants-filters::-webkit-scrollbar {
          width: 5px;
        }
        .grants-filters::-webkit-scrollbar-track {
          background: transparent;
        }
        .grants-filters::-webkit-scrollbar-thumb {
          background: #d1fae5;
          border-radius: 9999px;
        }
        @media (max-width: 960px) {
          .grants-search-grid { grid-template-columns: 1fr !important; }
          .grants-filters { position: static !important; max-height: none !important; }
          .grants-filters-body { display: none; }
          .grants-filters-body.open { display: block; }
          .grants-skeleton-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 961px) {
          .grants-filters-toggle { cursor: default !important; }
          .grants-filters-chevron { display: none !important; }
        }
      `}</style>
    </>
  );
};
