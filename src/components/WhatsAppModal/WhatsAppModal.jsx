import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import './WhatsAppModal.css';

export default function WhatsAppModal() {
  const [showForm, setShowForm] = useState(false);
  const [modalTitle, setModalTitle] = useState('Hubungi Bimbel Junior');
  const [notesPlaceholder, setNotesPlaceholder] = useState('Tulis pesan Anda di sini...');
  const [gradeVisible, setGradeVisible] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    notes: ''
  });

  useEffect(() => {
    const handleOpen = (e) => {
      const { title, defaultMessage, placeholder, showGrade, defaultGrade } = e.detail || {};
      setModalTitle(title || 'Hubungi Bimbel Junior');
      setFormData({
        name: '',
        phone: '',
        grade: defaultGrade || '',
        notes: defaultMessage || ''
      });
      setNotesPlaceholder(placeholder || 'Tulis pesan Anda di sini...');
      setGradeVisible(showGrade !== false);
      setShowForm(true);
    };

    window.addEventListener('open-whatsapp-modal', handleOpen);
    return () => window.removeEventListener('open-whatsapp-modal', handleOpen);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let text = `Halo Bimbel Junior!%0A%0A`;
    text += `*Nama Siswa/Penanya:* ${formData.name}%0A`;
    text += `*No. WhatsApp / HP:* ${formData.phone}%0A`;
    if (gradeVisible && formData.grade) {
      text += `*Jenjang Kelas:* ${formData.grade}%0A`;
    }
    text += `*Pesan:* ${formData.notes || '-'}`;

    window.open(`https://wa.me/62881024193340?text=${text}`, '_blank');
    setShowForm(false);
    setFormData({ name: '', phone: '', grade: '', notes: '' });
  };

  if (!showForm) return null;

  return (
    <div className="wa-modal-overlay" onClick={() => setShowForm(false)}>
      <div className="wa-modal" onClick={e => e.stopPropagation()}>
        <div className="wa-modal__header">
          <h3>{modalTitle}</h3>
          <button className="wa-modal__close" onClick={() => setShowForm(false)} aria-label="Tutup">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="wa-modal__form">
          <div className="form-group">
            <label htmlFor="wa-form-name">Nama Lengkap</label>
            <input 
              id="wa-form-name"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
              placeholder="Masukkan nama lengkap Anda"
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="wa-form-phone">No. WhatsApp / HP</label>
            <input 
              id="wa-form-phone"
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              required 
              placeholder="Contoh: 08123456789"
              className="form-control"
            />
          </div>
          
          {gradeVisible && (
            <div className="form-group">
              <label htmlFor="wa-form-grade">Jenjang Kelas</label>
              <select 
                id="wa-form-grade"
                name="grade" 
                value={formData.grade} 
                onChange={handleInputChange} 
                required
                className="form-control"
              >
                <option value="">Pilih jenjang kelas...</option>
                <option value="SD">SD (Sekolah Dasar Kelas 4,5,6)</option>
                <option value="SMP">SMP (Sekolah Menengah Pertama)</option>
                <option value="SMA">SMA (Sekolah Menengah Atas)</option>
                <option value="Alumni/Gap Year">Alumni / Gap Year</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="wa-form-notes">Pesan / Pertanyaan</label>
            <textarea 
              id="wa-form-notes"
              name="notes" 
              value={formData.notes} 
              onChange={handleInputChange} 
              required
              placeholder={notesPlaceholder}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-whatsapp wa-modal__submit">
            <Send size={18} />
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
