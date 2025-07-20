package com.ora_core.influencer_finder.service;

public interface IService<T, ID> {
    
    T save(T input);
    T read(ID id);
    T update(T updateValue);
    boolean delete(ID id);

}
