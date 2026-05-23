using HotelBooking.Data;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Repositories;

public class Repository<T> : IRepository<T> where T : class
{
    protected readonly HotelBookingContext _db;
    protected readonly DbSet<T> _set;

    public Repository(HotelBookingContext db)
    {
        _db = db;
        _set = db.Set<T>();
    }

    public async Task<T> AddAsync(T entity)
    {
        await _set.AddAsync(entity);
        await SaveChangesAsync();
        return entity;
    }

    public async Task DeleteAsync(T entity)
    {
        _set.Remove(entity);
        await SaveChangesAsync();
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _set.ToListAsync();
    }

    public async Task<T?> GetByIdAsync(int id)
    {
        return await _set.FindAsync(id);
    }

    public async Task SaveChangesAsync()
    {
        await _db.SaveChangesAsync();
    }

    public async Task UpdateAsync(T entity)
    {
        _set.Update(entity);
        await SaveChangesAsync();
    }
}
