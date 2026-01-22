import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>LOADING COLLECTION</h1>
      </div>
    );
  }

  const handleSave = () => {
    setProducts((prev) =>
      prev.map((item) =>
        item._id === editingProduct._id ? editingProduct : item,
      ),
    );
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item._id !== id));
    setFilteredProducts((prev) => prev.filter((item) => item._id !== id));
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.image) {
      alert("All fields are required");
      return;
    }

    const productToAdd = {
      _id: Date.now(),
      title: newProduct.title,
      price: Number(newProduct.price),
      image: newProduct.image,
    };

    setProducts((prev) => [productToAdd, ...prev]);
    setNewProduct({ title: "", price: "", image: "" });
    setShowAddModal(false);
  };

  const handleSearch = () => {
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setFilteredProducts(results);
    setIsSearching(true);
    setIsCartOpen(false);
    setShowSearchModal(false);
    setSearchQuery("");
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
    setIsSearching(false);
  };

  const handleBackHome = () => {
    setIsSearching(false);
    setIsCartOpen(false);
  };

  const filteredByCategory =
    activeFilter === "all"
      ? products
      : products.filter(
          (item) =>
            item.category && item.category.toLowerCase().includes(activeFilter),
        );

  const displayProducts = isCartOpen
    ? cartItems
    : isSearching
      ? filteredProducts
      : filteredByCategory;

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-top">
          <div>
            <h1>LUXURY COLLECTION</h1>
            <p>Crafted for elegance. Designed for presence.</p>
          </div>

          <div className="top-actions">
            {/* FILTER */}
            <div className="filter-wrapper">
              <button
                className="filter-btn"
                onClick={() => setShowFilter(!showFilter)}
              >
                🎛️ Filter
              </button>

              {showFilter && (
                <div className="filter-dropdown">
                  <button
                    onClick={() => {
                      setActiveFilter("all");
                      setShowFilter(false);
                    }}
                  >
                    No Filter
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter("women");
                      setShowFilter(false);
                    }}
                  >
                    Women
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter("men");
                      setShowFilter(false);
                    }}
                  >
                    Men
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter("kids");
                      setShowFilter(false);
                    }}
                  >
                    Kids
                  </button>
                </div>
              )}
            </div>

            <button className="search-btn" onClick={() => setShowSearch(true)}>
              🔍
            </button>

            <button className="cart-btn" onClick={handleOpenCart}>
              🛒
              <span className="cart-count">{cartItems.length}</span>
            </button>

            <button className="add-btn" onClick={() => setShowAddModal(true)}>
              ➕ Add Item
            </button>
          </div>
        </div>
      </header>

      {(isSearching || isCartOpen) && (
        <button className="back-btn" onClick={handleBackHome}>
          ← Back to Collection
        </button>
      )}

      <section className="bento-grid">
        {displayProducts.length > 0 ? (
          displayProducts.map((item, index) => (
            <div
              className={`card ${index % 5 === 0 ? "card-large" : ""}`}
              key={item._id}
            >
              <img src={item.image} alt={item.title} />

              {!isCartOpen && (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => setEditingProduct(item)}
                  >
                    ✏️
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    🗑️
                  </button>

                  <button
                    className="cart-add-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </>
              )}

              <div className="overlay">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h2>No items found</h2>
          </div>
        )}
      </section>

      {editingProduct && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Edit Product</h2>

            <input
              value={editingProduct.title}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, title: e.target.value })
              }
            />

            <input
              type="number"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: e.target.value })
              }
            />

            <input
              value={editingProduct.image}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, image: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Add New Product</h2>

            <input
              placeholder="Product Name"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={handleAddProduct}>Add</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showSearchModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Search Collection</h2>

            <input
              placeholder="Enter item name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={handleSearch}>Search</button>
              <button onClick={() => setShowSearchModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
